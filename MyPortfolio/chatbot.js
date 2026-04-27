// 1. Chatbot එකේ HTML කොටස හැම පිටුවකටම දානවා
const chatbotHTML = `
    <button class="chat-btn" id="chatBtn">💬 Chat with AI</button>
    <div class="chat-popup" id="chatPopup">
        <div class="chat-header">
            <span>🤖 Nisansala's Assistant</span>
            <button id="closeChat">✖</button>
        </div>
        <div class="chat-box" id="chatBox">
            <div class="chat-msg bot-msg">Hello! I'm Nisansala's AI assistant. You can ask me about his Unity games, KN Docs, or his education. How can I help?</div>
        </div>
        <div class="chat-input-area">
            <input type="text" id="chatInput" placeholder="Type a message...">
            <button id="sendBtn">Send</button>
        </div>
    </div>
`;

// Body එකේ අන්තිමටම මේ HTML එකතු කරනවා
document.body.insertAdjacentHTML('beforeend', chatbotHTML);

// 2. Chatbot එකේ මොළය (Logic)
const chatBtn = document.getElementById('chatBtn');
const chatPopup = document.getElementById('chatPopup');
const closeChat = document.getElementById('closeChat');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Chat එක Open/Close කිරීම
chatBtn.addEventListener('click', () => { chatPopup.style.display = 'flex'; chatBtn.style.display = 'none'; });
closeChat.addEventListener('click', () => { chatPopup.style.display = 'none'; chatBtn.style.display = 'block'; });

// AI එකේ උත්තර
function getBotResponse(input) {
    let text = input.toLowerCase();
    
    if (text.includes("game") || text.includes("unity") || text.includes("foxrunner") || text.includes("c#")) {
        return "Nisansala is a passionate Unity developer! He has built games like FoxRunner using C#. You can view them in the 'Games' section.";
    } else if (text.includes("kn docs") || text.includes("cv") || text.includes("assignment") || text.includes("typing")) {
        return "KN Docs is Nisansala's professional document service. He offers ATS-friendly CV creation and assignment structuring. Check out the 'KN Docs' page!";
    } else if (text.includes("education") || text.includes("degree") || text.includes("bit") || text.includes("moratuwa")) {
        return "He completed his A/L exams in 2023 in the Commerce stream, and boldly transitioned into IT. He is currently pursuing his BIT at the University of Moratuwa.";
    } else if (text.includes("skills") || text.includes("stack") || text.includes("laravel") || text.includes("python") || text.includes("linux")) {
        return "His tech stack includes Unity (C#), Java, Python, and web development using Laravel. He also holds 50+ professional certifications in Linux, Azure, and Cybersecurity!";
    } else if (text.includes("contact") || text.includes("phone") || text.includes("email") || text.includes("whatsapp")) {
        return "You can reach him via WhatsApp at +94 7X XXX XXXX or check the 'Contact' page for his full details and GitHub/LinkedIn links.";
    } else {
        return "That's a great question! For more details, feel free to navigate through the website or contact Nisansala directly from the Contact page.";
    }
}

// Message එක යවන Function එක
function sendMessage() {
    let userText = chatInput.value.trim();
    if (userText === "") return;

    chatBox.innerHTML += `<div class="chat-msg user-msg">${userText}</div>`;
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        let botReply = getBotResponse(userText);
        chatBox.innerHTML += `<div class="chat-msg bot-msg">${botReply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });