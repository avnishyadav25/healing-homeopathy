// src/components/BlogSection.js

import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Slide, Zoom, Fade } from '@mui/material';
import blog1Image from '../assets/blog1.jpg';
import blog2Image from '../assets/blog2.jpg';
import blog3Image from '../assets/blog3.jpg';
import blog4Image from '../assets/blog4.jpg';

const blogs = [
  {
    id: 1,
    title: 'Understanding Homeopathy',
    excerpt: 'Learn the basics of homeopathy and how it can benefit your health.',
    image: blog1Image,
    link: '/blogs/understanding-homeopathy',
    date: 'August 15, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 2,
    title: 'The Benefits of Natural Remedies',
    excerpt: 'Discover how natural remedies can help you lead a healthier life.',
    image: blog2Image,
    link: '/blogs/benefits-of-natural-remedies',
    date: 'August 12, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 3,
    title: 'Boosting Immunity with Homeopathy',
    excerpt: 'Explore homeopathic remedies that can strengthen your immune system.',
    image: blog3Image,
    link: '/blogs/boosting-immunity',
    date: 'August 10, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 4,
    title: 'Managing Chronic Conditions',
    excerpt: 'Homeopathy offers long-term solutions for chronic conditions.',
    image: blog4Image,
    link: '/blogs/managing-chronic-conditions',
    date: 'August 8, 2024',
    author: 'Dr. Aparna Singh',
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section" style={{ padding: '40px 0' }}>
      <Container>
        <Fade in timeout={1000}>
          <Typography variant="h4" align="center" gutterBottom>
            Latest from Our Blog
          </Typography>
        </Fade>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} md={6} key={blog.id}>
              <Slide direction="up" in timeout={1000 + index * 200}>
                <Card sx={{ display: 'flex', height: '100%', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                  <Zoom in timeout={1000 + index * 200}>
                    <CardMedia
                      component="img"
                      sx={{ width: '40%' }}
                      image={blog.image}
                      alt={blog.title}
                    />
                  </Zoom>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                    <CardContent>
                      <Typography component="h5" variant="h6">
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.date} by {blog.author}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                        {blog.excerpt}
                      </Typography>
                    </CardContent>
                    <Button size="small" color="primary" href={blog.link}>
                      Continue Reading
                    </Button>
                  </Box>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Fade in timeout={1000}>
            <Button variant="contained" color="primary" href="/blogs">
              More Blogs
            </Button>
          </Fade>
        </Box>
      </Container>
    </section>
  );
};

export default BlogSection;



/*import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import blog1Image from '../assets/blog1.jpg';
import blog2Image from '../assets/blog2.jpg';
import blog3Image from '../assets/blog3.jpg';
import blog4Image from '../assets/blog4.jpg';
import blog5Image from '../assets/blog5.jpg';
import blog6Image from '../assets/blog6.jpg';
import blog7Image from '../assets/blog7.jpg';
import blog8Image from '../assets/blog8.jpg';
import blog9Image from '../assets/blog9.jpg';

const blogs = [
  {
    id: 1,
    title: 'Understanding Homeopathy',
    excerpt: 'Learn the basics of homeopathy and how it can benefit your health.',
    image: blog1Image,
    link: '/blogs/understanding-homeopathy',
    date: 'August 15, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 2,
    title: 'The Benefits of Natural Remedies',
    excerpt: 'Discover how natural remedies can help you lead a healthier life.',
    image: blog2Image,
    link: '/blogs/benefits-of-natural-remedies',
    date: 'August 12, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 3,
    title: 'Boosting Immunity with Homeopathy',
    excerpt: 'Explore homeopathic remedies that can strengthen your immune system.',
    image: blog3Image,
    link: '/blogs/boosting-immunity',
    date: 'August 10, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 4,
    title: 'Managing Chronic Conditions',
    excerpt: 'Homeopathy offers long-term solutions for chronic conditions.',
    image: blog4Image,
    link: '/blogs/managing-chronic-conditions',
    date: 'August 8, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 5,
    title: 'Homeopathy for Mental Wellbeing',
    excerpt: 'Support your mental health with natural and effective homeopathic treatments.',
    image: blog5Image,
    link: '/blogs/mental-wellbeing',
    date: 'August 6, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 6,
    title: 'Family Wellness with Homeopathy',
    excerpt: 'Homeopathy offers safe and gentle treatments for the entire family.',
    image: blog6Image,
    link: '/blogs/family-wellness',
    date: 'August 4, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 7,
    title: 'The Importance of Personalized Consultation',
    excerpt: 'Get the best results with personalized homeopathic consultations.',
    image: blog7Image,
    link: '/blogs/personalized-consultation',
    date: 'August 2, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 8,
    title: 'Homeopathy for Acute Conditions',
    excerpt: 'Find quick and effective relief for acute conditions with homeopathy.',
    image: blog8Image,
    link: '/blogs/acute-conditions',
    date: 'July 30, 2024',
    author: 'Dr. Aparna Singh',
  },
  {
    id: 9,
    title: 'The Future of Homeopathy',
    excerpt: 'Explore the future trends and developments in homeopathic medicine.',
    image: blog9Image,
    link: '/blogs/future-of-homeopathy',
    date: 'July 28, 2024',
    author: 'Dr. Aparna Singh',
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section" style={{ padding: '40px 0' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Latest from Our Blog
        </Typography>
        <Grid container spacing={4}>
          {blogs.map(blog => (
            <Grid item xs={12} md={6} key={blog.id}>
              <Card sx={{ display: 'flex', height: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{ width: '40%' }}
                  image={blog.image}
                  alt={blog.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                  <CardContent>
                    <Typography component="h5" variant="h6">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.date} by {blog.author}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                      {blog.excerpt}
                    </Typography>
                  </CardContent>
                  <Button size="small" color="primary" href={blog.link}>
                    Continue Reading
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" href="/blogs">
            More Blogs
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default BlogSection;
*/