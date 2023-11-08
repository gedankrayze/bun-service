export interface LayoutProps
{
    title?: string;
    children?: string;
}

const Layout = ({title, children}: LayoutProps) =>
{
    return <html lang={'en'}>
    <head>
        <meta charSet={'UTF-8'}/>
        <meta name={'viewport'}
              content={'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'}/>
        <title>{title}</title>
        <link rel={'stylesheet'}
              href={'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'}/>
    </head>
    <body>
    <section className="section">
        <div className="container">
            <h1 className="title">
                Hello World
            </h1>
            <p className="subtitle">
                My first website with Bun!
            </p>
        </div>

        <div className={'container'}>
            {children}
        </div>
    </section>
    </body>
    </html>;
};
export default Layout;