// Add a new note to the db.json file
app.post("/db/db.json")
app.post("/uuid.js")
app.post("/api/notes", (req, res) => {
    // Get the new note data from the request body
    const newNote = req.body;

    // Read the db.json file to get the existing notes
    fs.readFile("db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to read notes from the database." });
        }

        // Parse the JSON data from the file
        const notes = JSON.parse(data);

        // Assign a unique ID to the new note
        newNote.id = uuidv4(); // You would need to import the 'uuid' module for this

        // Add the new note to the existing notes array
        notes.push(newNote);

        // Write the updated notes back to the db.json file
        fs.writeFile("db.json", JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Failed to save the new note." });
            }

            // Send the new note as a response
            res.json(newNote);
        });
    });
});