import React from 'react';

function Footer(){
    return (
        <footer style={{ backgroundColor: "rgb(250,250,250)"}}>
        <div className="container border-top mt-5 pt-5">
            <div className ="row mt-5">
                <div className ="col">
                    <img src="/media/images/logo.svg" style={{width:"50%"}} />
                    <p>
                        &copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved.
                    </p>
                </div>
                <div className ="col">
                    <p> Company</p>
                    <ul>
                        <a href="">About</a>
                        <br />
                        <a href="">Products</a>
                        <br />
                        <a href="">Pricing</a>
                        <br />
                        <a href="">Referal programe</a>
                        <br />
                        <a href="">Careers</a>
                        <br />
                        <a href="">Zerodha.tech</a>
                        <br />
                        <a href="">Press & Media</a>
                        <br />
                        <a href="">Zerodha Cares (Csr)</a>
                    </ul>
                </div>

                <div className ="col">
                    <p> Support</p>
                    <a href=" "> Contact Us</a>
                    <br/>
                    <a href=" ">Support Portal</a>
                    <br/>
                    <a href=" ">Z-connect blog</a>
                    <br/>
                    <a href=" "> List of charges</a>
                    <br/>
                    <a href=" ">Downloads & Resources</a>
                </div>
                <div className ="col">
                    <p> Account</p>
                    <a href=""> Open an account</a>
                    <br />
                    <a href="">Fund transfer</a>
                    <br />
                    <a href="">60 day challenge</a>
                </div>
            </div>
    <div className ="mt-5 fs-8 text-muted">
    <p>
        Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633
        CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.:
        IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd.
        MCX: 46025 – SEBI Registration no.: INZ000038238
        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
        For any complaints pertaining to securities broking please write to
        complaints@zerodha.com.
    </p>

    <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, Email ID. Communication, Speedy redressal of the grievances.
    </p>

    <p>
        Investments in securities market are subject to market risks; read all the
        related documents carefully before investing.
    </p>

    <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from exchanges on your mobile/email at the end of the day.
        Issued in the interest of investors. KYC is one time exercise while dealing in
        securities markets - once KYC is done through a SEBI registered intermediary,
        you need not undergo the same process again when you approach another intermediary."
    </p>

    <p>
        Dear Investor, if you are subscribing to an IPO, there is no need to issue a
        cheque. Please write your bank account number and sign the IPO application form
        to authorize your bank to make payment in case of allotment. In case of non
        allotment the funds will remain in your bank account.
    </p>

    <p>
        Do not share your login credentials, OTPs, passwords, or other sensitive
        information with anyone. If you find anyone claiming to be part of Zerodha
        and offering such services, please create a ticket here.
    </p>

    <p>
        NSE &nbsp;&nbsp;&nbsp;&nbsp;
        BSE &nbsp;&nbsp;&nbsp;&nbsp;
        MCX &nbsp;&nbsp;&nbsp;&nbsp;
        Terms &amp; conditions &nbsp;&nbsp;&nbsp;&nbsp;
        Policies &amp; procedures &nbsp;&nbsp;&nbsp;&nbsp;
        Privacy policy &nbsp;&nbsp;&nbsp;&nbsp;
        Disclosure
    </p>
</div>
        </div>
    </footer>
    );
}

export default Footer;