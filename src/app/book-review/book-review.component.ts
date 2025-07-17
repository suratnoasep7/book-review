.container {
  max-width: 1200px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.header {
  background: #f44336;
  color: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  font-size: 32px;
}

.section { margin-top: 40px; }
.section-title { font-size: 22px; margin-bottom: 16px; color: #f44336; }

.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

.input, .textarea {
  width: 100%;
  margin-bottom: 14px;
  padding: 16px;
  font-size: 15px;
  border-radius: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
}

.textarea { height: 120px; resize: none; }

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: white;
}

.green-btn { background: #4CAF50; }
.red-btn { background: #f44336; }

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.book-card {
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s;
}

.book-card.selected {
  border: 2px solid #f44336;
  box-shadow: 0 8px 16px rgba(244,67,54,0.3);
}

.book-img { width: 100%; height: 280px; object-fit: cover; }
.book-info { padding: 16px; }
.book-name { font-weight: bold; font-size: 18px; margin-bottom: 8px; }
.book-year { font-size: 14px; color: #666; }

.review-container { display: flex; flex-wrap: wrap; gap: 30px; margin-top: 24px; }
.review-list { flex: 1 1 480px; }
.review-form { flex: 1 1 400px; }

.review-card {
  background: #fff8f8;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  margin-bottom: 16px;
}

.review-email { font-weight: bold; margin-bottom: 8px; font-size: 15px; }
.review-note { margin-bottom: 10px; color: #444; font-size: 15px; }
.review-stars { color: #FFD700; font-size: 20px; }

.stars .star { cursor: pointer; font-size: 28px; transition: color 0.2s; }

.empty-text { color: gray; font-style: italic; margin: 20px 0; }

.required { color: red; }
.error-text { color: red; font-size: 12px; margin-top: -10px; margin-bottom: 10px; }
