document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const enterButton = document.getElementById('enterButton');
    const mainMenu = document.getElementById('mainMenu');
    const backButton = document.getElementById('backButton');
    const spaces = document.querySelectorAll('.space');
    const puddingButtons = document.querySelectorAll('.pudding-button');
    const startGameButton = document.getElementById('startGame');

    // 初始化時隱藏返回按鈕
    backButton.style.display = 'none';

    // 進入按鈕點擊事件
    enterButton.addEventListener('click', () => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    });

    // 為每個布丁按鈕添加點擊事件
    puddingButtons.forEach(button => {
        if (button.id !== 'startGame') {
            button.addEventListener('click', () => {
                const targetSpace = button.getAttribute('data-space');
                
                // 隱藏主選單
                mainMenu.classList.add('hidden');
                
                // 顯示返回按鈕
                backButton.style.display = 'block';
                
                // 顯示目標空間
                document.getElementById(targetSpace).classList.remove('hidden');
            });
        }
    });

    // 開始遊戲按鈕點擊事件
    startGameButton.addEventListener('click', () => {
        window.location.href = 'https://joy2006-dot.github.io/jiandao/';
    });

    // 返回按鈕點擊事件
    backButton.addEventListener('click', () => {
        // 隱藏所有空間
        spaces.forEach(space => space.classList.add('hidden'));
        
        // 顯示主選單
        mainMenu.classList.remove('hidden');
        
        // 隱藏返回按鈕
        backButton.style.display = 'none';
    });
}); 