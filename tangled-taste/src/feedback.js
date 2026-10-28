// The Feedback page: sends the form to the Worker in worker/ (which stores it in a private database).
const ENDPOINT = 'https://feedback.tangledtaste.com/api/feedback';

const form = document.getElementById('form');
const message = document.getElementById('message');
const send = document.getElementById('send');
const status = document.getElementById('status');
const count = document.getElementById('count');

const say = (text, kind = '') => { status.textContent = text; status.className = kind; };
message.addEventListener('input', () => { count.textContent = `${message.value.length} / 5000`; });

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!message.value.trim()) { say('Please write some feedback first.', 'err'); message.focus(); return; }
  const email = document.getElementById('email').value.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { say('That email address does not look right (or leave it blank).', 'err'); return; }
  send.disabled = true;
  say('Sending…');
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: document.getElementById('category').value,
        name: document.getElementById('name').value,
        email,
        message: message.value,
        website: document.getElementById('website').value, // hidden trap field: people leave it empty
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
    form.reset();
    count.textContent = '0 / 5000';
    say('Thank you, your feedback was sent.', 'ok');
  } catch (err) {
    // the text typed stays in the form so nothing is lost
    say(err instanceof TypeError ? 'Could not reach the server. Please check your connection and try again.' : err.message, 'err');
  } finally {
    send.disabled = false;
  }
});
