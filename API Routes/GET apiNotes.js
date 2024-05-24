// Read the db.json file to get all notes
app.get("/api/notes", (req, res) => {
    // Read the db.json file and parse its contents
    fs.readFile("db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to read notes from the database." });
        }

        // Parse the JSON data from the file
        const notes = JSON.parse(data);

        // Send the notes as a JSON response
        res.json(notes);
    });
});