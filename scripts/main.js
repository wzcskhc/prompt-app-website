// ===== 导航栏滚动效果 =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // 添加滚动时的背景效果
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 截图轮播 =====
const screenshotItems = document.querySelectorAll('.screenshot-item');
let currentScreenshot = 0;

// 自动轮播功能（可选）
function autoRotateScreenshots() {
    screenshotItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentScreenshot);
    });
    
    currentScreenshot = (currentScreenshot + 1) % screenshotItems.length;
}

// 每5秒切换一次（如果需要自动轮播，取消下面的注释）
// setInterval(autoRotateScreenshots, 5000);

// ===== 下载按钮跟踪 =====
document.querySelectorAll('.download-btn, .btn-primary[href="#download"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // 这里可以添加下载统计代码
        console.log('Download clicked');
        
        // 如果是锚点链接，不阻止默认行为
        if (this.getAttribute('href').startsWith('#')) {
            return;
        }
        
        // 可以在这里添加 Google Analytics 或其他分析工具的事件跟踪
        // gtag('event', 'download', { 'event_category': 'engagement' });
    });
});

// ===== 动画效果 - 滚动时元素淡入 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为需要动画的元素添加观察
document.querySelectorAll('.feature-card, .pricing-card, .screenshot-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== 复制命令行代码 =====
const codeElements = document.querySelectorAll('code');
codeElements.forEach(code => {
    code.style.cursor = 'pointer';
    code.title = '点击复制';
    
    code.addEventListener('click', async function() {
        const text = this.textContent;
        
        try {
            await navigator.clipboard.writeText(text);
            
            // 显示复制成功提示
            const originalText = this.textContent;
            this.textContent = '已复制!';
            this.style.backgroundColor = '#10b981';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('复制失败:', err);
        }
    });
});

// ===== 移动端菜单切换（如果需要） =====
function createMobileMenu() {
    const navContainer = document.querySelector('.navbar .container');
    
    // 创建汉堡菜单按钮
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `;
    menuToggle.style.display = 'none';
    
    // 在移动端显示菜单按钮
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    }
    
    navContainer.appendChild(menuToggle);
    
    // 菜单切换逻辑
    menuToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('mobile-active');
    });
}

// 初始化移动端菜单
createMobileMenu();

// 窗口大小改变时调整菜单显示
window.addEventListener('resize', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    } else {
        menuToggle.style.display = 'none';
        document.querySelector('.nav-links').classList.remove('mobile-active');
    }
});

// ===== 页面加载动画 =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Hero 区域入场动画
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease forwards';
    }
    
    if (heroImage) {
        heroImage.style.animation = 'fadeInUp 0.8s ease 0.2s forwards';
        heroImage.style.opacity = '0';
        setTimeout(() => {
            heroImage.style.opacity = '1';
        }, 200);
    }
});