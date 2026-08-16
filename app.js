// Инициализация Mini App внутри MAX
const maxApp = window.MaxMiniApps;
maxApp.ready();

document.getElementById('send-btn').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (!description.trim()) {
        alert('Пожалуйста, опишите нарушение');
        return;
    }

    // Собираем данные в один объект
    const reportData = {
        type: "audit_report",
        category: category,
        text: description
    };

    // Отправляем данные боту и закрываем мини-приложение
    maxApp.sendData(JSON.stringify(reportData));
    maxApp.close();
});