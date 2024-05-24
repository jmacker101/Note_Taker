// Route to serve the notes.html file
app.get("/notes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Route to serve the index.html file
app.get("\public\index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});