module.exports = (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL requise." });
  res.json({ sticker: url, note: "Ajoute Sharp/CamanJS ici pour une vraie image webp" });
};
