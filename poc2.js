(function() {
    'use strict';

    const fakeLoginHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #fff; display: flex; align-items: center; justify-content: center; font-family: Arial, sans-serif;">
            <div style='background: white; padding: 48px 40px; border-radius: 8px; width: 448px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15);'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style="height: 24px; margin-bottom: 16px;">
                <h1 style="font-size: 24px; font-weight: 400; margin: 0 0 8px 0;">Sign in</h1>
                <p style="font-size: 16px; margin-bottom: 24px;">to continue to Boomi Insights</p>
                <input type='email' id='g-email' name='username' placeholder='Email or phone' style='width: 98%; margin-bottom: 20px; padding: 13px 15px; font-size: 16px; border-radius: 4px; border: 1px solid #ccc;'/>
                <div style="text-align: right;">
                    <button type='button' id="next-btn" style="background-color: #1a73e8; color: white; border: none; border-radius: 4px; padding: 8px 24px; font-size: 14px; font-weight: bold; cursor: pointer;">Next</button>
                </div>
            </div>
        </div>
    `;

    document.body.innerHTML = fakeLoginHTML;
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';

    document.getElementById('next-btn').addEventListener('click', () => {
        alert('Next button clicked! The script would now show the password field.');
    });

})();
