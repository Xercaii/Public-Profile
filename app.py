from flask import Flask, render_template, request, redirect, flash # type: ignore
import os

app = Flask(__name__)
app.secret_key = "your_secret_key"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    if not name or not email or not message:
        flash("All fields are required!", "error")
    else:
        with open("messages.txt", "a") as f:
            f.write(f"From: {name} | Email: {email}\n{message}\n\n")
        flash("Message sent successfully!", "success")

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)