function Footer(){
    const currentYear = new Date().getFullYear()

    return (
        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    © {currentYear} Copyright Text
                    <a href="#" className="grey-text text-lighten-4 right">Repo</a>
                </div>
            </div>
        </footer>
    ) 

}

export default Footer;