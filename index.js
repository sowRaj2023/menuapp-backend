const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5007;

// Mock data for different languages
const menuItems = {
  English: {
    home: "Home",
    movies: "Movies",
    tvShows: "TV Shows",
    sports: "Sports",
    live: "Live"
  },
  French: {
    home: "Accueil",
    movies: "Films",
    tvShows: "Séries TV",
    sports: "Sports",
    live: "En direct"
  },
  German: {
    home: "Startseite",
    movies: "Filme",
    tvShows: "Fernsehsendungen",
    sports: "Sport",
    live: "Live"
  },
  Russian: {
    home: "Главная",
    movies: "Фильмы",
    tvShows: "Телепередачи",
    sports: "Спорт",
    live: "Прямой эфир"
  },
  Spanish: {
    home: "Inicio",
    movies: "Películas",
    tvShows: "Series",
    sports: "Deportes",
    live: "En vivo"
  },
  Chinese: {
    home: "主页",
    movies: "电影",
    tvShows: "电视剧",
    sports: "体育",
    live: "直播"
  }
};

// Endpoint to get menu items based on language
app.get('/api/menu-items', (req, res) => {
  const lang = req.query.lang;
  const data = menuItems[lang] || menuItems['English']; // Default to English if language is not found
  res.json(data);
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
