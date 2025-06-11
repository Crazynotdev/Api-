module.exports = (req, res) => {
  const t = req.query.text;
  if (!t) return res.status(400).json({ error: "Paramètre 'text' requis" });
  const fancy = t.split('').map(c => c + '\u0336').join('');
  res.json({ fancy });
};
