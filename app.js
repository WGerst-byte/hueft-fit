function openTab(tabId, clickedButton) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  clickedButton.classList.add('active');
}
function setFontSize(size) {
  document.documentElement.style.setProperty('--base-font', size);
  document.getElementById('btn-font-normal').classList.toggle('active', size === '19px');
  document.getElementById('btn-font-large').classList.toggle('active', size === '23px');
}
async function shareApp() {
  const shareData = { title: 'Hüft-Fit – Übungen nach der Hüft-OP', text: 'Hier ist eine tolle, kostenlose Übungs-App für nach der Hüftoperation:', url: window.location.href };
  const feedback = document.getElementById('share-feedback');
  if (navigator.share) { try { await navigator.share(shareData); } catch (err) {} }
  else { navigator.clipboard.writeText(window.location.href); feedback.textContent = '✅ Link wurde kopiert! Sie können ihn jetzt einfach einfügen und versenden.'; }
}
if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(err => console.log('Service Worker Fehler:', err)); }); }
