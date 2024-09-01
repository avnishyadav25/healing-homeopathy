import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { EditorState, convertToRaw, RichUtils, AtomicBlockUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import 'draft-js/dist/Draft.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [permalink, setPermalink] = useState('');
  const [author, setAuthor] = useState('Healing Homeopathy');
  const [publishTime, setPublishTime] = useState(new Date());

  const apiUrl = process.env.REACT_APP_API_URL; 

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleEditorChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = () => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onUnderlineClick = () => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contentState = editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(contentState)); // Save raw content

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', rawContent); // Save raw Draft.js content
    formData.append('tags', tags);
    formData.append('category', category);
    formData.append('permalink', permalink);
    formData.append('author', author);
    formData.append('publishTime', publishTime);
    if (featuredImage) {
      formData.append('featuredImage', featuredImage);
    }

    try {
      const response = await axios.post(`${apiUrl}/blogs/create`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Blog created successfully', response.data);
    } catch (error) {
      console.error('Error creating blog', error);
    }
  };

  const addImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const url = response.data.url;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
        setEditorState(newEditorState);
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    };
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Create New Blog
              </Typography>
              <TextField
                fullWidth
                label="Blog Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} md={9}>
              <Box sx={{ border: '1px solid #ddd', padding: '8px', borderRadius: '4px', marginBottom: '20px' }}>
                <Button onClick={onBoldClick} sx={{ marginRight: 1 }}>Bold</Button>
                <Button onClick={onItalicClick} sx={{ marginRight: 1 }}>Italic</Button>
                <Button onClick={onUnderlineClick} sx={{ marginRight: 1 }}>Underline</Button>
              </Box>
              <Box sx={{ border: '1px solid #ddd', borderRadius: '4px', padding: '16px', minHeight: '200px' }}>
                <Editor
                  editorState={editorState}
                  handleKeyCommand={handleKeyCommand}
                  onChange={handleEditorChange}
                  placeholder="Write your blog content here..."
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ mb: 2 }}
                    onClick={addImage}
                  >
                    Upload Featured Image
                    <input
                      type="file"
                      hidden
                    />
                  </Button>
                  {featuredImage && (
                    <CardMedia
                      component="img"
                      image={URL.createObjectURL(featuredImage)}
                      alt="Featured"
                      sx={{ mt: 2, mb: 2 }}
                    />
                  )}

                  <TextField
                    fullWidth
                    label="Tags (comma separated)"
                    variant="outlined"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    label="Category"
                    variant="outlined"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    label="Permalink"
                    variant="outlined"
                    value={permalink}
                    onChange={(e) => setPermalink(e.target.value)}
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    label="Author"
                    variant="outlined"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    sx={{ mb: 2 }}
                  />

                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Publish Time
                  </Typography>
                  <Datetime
                    value={publishTime}
                    onChange={setPublishTime}
                    inputProps={{ className: 'form-control' }}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" color="primary">
                  Preview
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Publish
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateBlog;
