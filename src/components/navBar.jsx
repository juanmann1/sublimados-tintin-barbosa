import React from 'react';


class nav extends React.Component {
    render() {

        const customStyleContainer = {
            boxSizing: 'border-box',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: ' 0  20px',
            backgroundColor: 'rgba(99, 100, 197, 0.196)',
            opacity: '0.99',
            boxShadow: '7px 7px 15px #0c05007a',

        }

        const customLogo = {
            width: '80px',
            borderRadius: '100%',

        }

        const customStyleH1 = {
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            padding: '10px',
            fontWeight: 'bolder',
            fontSize: '30px',
            color: 'rgb(89, 6, 167, 0.696)'
        }

        const customStyleNav = {
            flex: 'auto'
        }

        const customStyleLi = {

        }



        const customStyleChildNav = {
            display: 'flex',
            justifyContent: 'space-around',
        }



        return (
            <div style={customStyleContainer} >
                <img style={customLogo} src="https://scontent.faep4-2.fna.fbcdn.net/v/t1.6435-9/79093823_101697134668412_8216679535723151360_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=973b4a&_nc_ohc=04md-oU3LQoAX9A3n3V&_nc_ht=scontent.faep4-2.fna&oh=00_AT--NGExIy5349EBjd80oUEmCoAZjkqlcjhj9vP6rlKiIg&oe=61FAB3FB" alt="" />
                <h1 style={customStyleH1}>Sublimados TinTin</h1>

                <nav style={customStyleNav}>
                    <ul style={customStyleChildNav}>
                        <li>
                            <a>Catalogo de  Productos</a>
                        </li>
                        <li>
                            <a>Ofertas y Promociones </a>
                        </li>
                        <li>
                            <a>Contectenos</a>
                        </li>
                    </ul>

                </nav>
                <button>login</button>


            </div>
        )

    }
}

export default nav;