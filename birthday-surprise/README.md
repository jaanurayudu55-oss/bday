# 🎂 Happy Birthday Baavaa - 18 September 2026 ❤️

A premium, romantic, interactive birthday surprise website crafted with love for **Baavaa**.

---

## 🚀 How To Open The Website

1. Simply double-click **`index.html`** in this folder.
2. It will open instantly in any web browser (Chrome, Safari, Edge, Firefox).
3. No setup, no Node.js, and no internet servers needed!
4. **Mobile & WhatsApp Ready**: It is fully responsive. When sharing via WhatsApp or opening on any smartphone, it provides a silky smooth full-screen experience.

---

## 📸 How To Add More Photos

Your photos are placed in the `images/` directory:
- `images/photo1.png` - Royal Enfield bike adventure pose
- `images/photo2.png` - Warm smile against the tree
- `images/photo3.jpg` - Seaside stroll with sunglasses
- `images/photo4.png` - Cool night city lights pose
- `images/photo5.png` - Scenic rest on the rocks
- `images/photo6.png` - Bike rider pose
- `images/photo7.png` - Sunglasses pose looking at phone
- `images/photo8.png` - Standing together at night
- `images/photo9.png` - Cute outdoor couple selfie
- `images/photo10.png` - Romantic artistic couple sketch
- `images/photo11.png` - Close-up cute couple selfie 🥰
- `images/photo12.jpg` - Couple portrait in saree & sunglasses 🌴❤️

### To add more photos:
1. Copy your new photo into the `images/` folder (for example, name it `photo6.jpg`).
2. Open `index.html` in any text editor (Notepad, VS Code, etc.).
3. Under the `<!-- 6. MEMORY GALLERY -->` section, duplicate one of the `<figure class="polaroid-card">` blocks:
   ```html
   <figure class="polaroid-card" data-index="5" role="button" tabindex="0">
     <div class="polaroid-img-box">
       <img src="images/photo6.jpg" alt="Our memory" loading="lazy">
     </div>
     <figcaption class="polaroid-caption">Your sweet caption here ❤️</figcaption>
   </figure>
   ```
4. Open `script.js` and add an entry to `CONFIG.gallery`:
   ```javascript
   {
     src: "images/photo6.jpg",
     caption: "Your sweet caption here ❤️"
   }
   ```

---

## 🎵 How To Add Your Favorite Song

1. Pick the song you want to play.
2. Rename it to **`song.mp3`**.
3. Place it inside the **`audio/`** folder (`audio/song.mp3`).
4. Refresh `index.html` in your browser!

*(Note: If `song.mp3` is not present, the website automatically plays a soothing, romantic acoustic chime lullaby using the built-in Web Audio API synthesizer so the music player always sounds lovely out of the box!)*

---

## 💌 How To Customize Messages

All personal messages can be edited directly:
- In **`script.js`**: Look at `CONFIG.personalMessage` and `CONFIG.secretLetter` at the top of the file.
- In **`index.html`**: Look at `#personal-message-section`, `#special-reasons-section`, and `#secret-letter-section`.

---

## ✨ Features Included
1. **Mystery Welcome Screen**: "Hey... Wait. 👀" with pulsing button "OPEN YOUR SURPRISE ❤️"
2. **Interactive 3D Gift Box**: Click to open lid with realistic ribbon, popping confetti & sparkles!
3. **Main Birthday Hero**: Glowing illuminated "BAAVAA❤️" title, floating balloons, and live countdown to 18 September 2026.
4. **Celebration Mode**: Automatic activation on 18 September 2026 (plus interactive preview toggle button).
5. **Personal Heartfelt Message**: Real-time typewriter animation with replay option.
6. **Why You're Special**: 4 interactive 3D cards with hover tilt.
7. **Polaroid Memory Gallery**: Vintage photo polaroids with full-screen Lightbox zoom, navigation arrows, and keyboard support.
8. **Secret Letter**: Interactive sealed red wax envelope that unseals and slides out your love letter!
9. **Music Player**: Rotating vinyl record, progress scrubber, and floating mini-player.
10. **Grand Finale**: Full-screen realistic night-sky fireworks show, cascading golden/rose confetti explosion, and emotional final love message.
11. **Minimal Luxury Footer**: "Made with love ❤️ | 18 • September • 2026" and back to top button.
