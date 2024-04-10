const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

const blogs = [
  { id: 1, title: 'Blog 1', content: 'Nội dung blog 1' },
  { id: 2, title: 'Blog 2', content: 'Nội dung blog 2' },
  { id: 3, title: 'Blog 3', content: 'Nội dung blog 3' }
];

const corsOptions = {
  origin: '*', // Có thể thay đổi '*' thành domain cụ thể của bạn
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.get('/blogs', (req, res) => {
  res.status(200).json(blogs);
});

app.get('/blog/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find(blog => blog.id === blogId);
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: 'Bài blog không tồn tại' });
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
