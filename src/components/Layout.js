import React from 'react'
import c from './Layout.module.css'

const Layuot = ({id, title, desc, urlBg, colorBg}) => {
    return (
        <section className={c.root} id={id}
                 style={
                     {
                         background: `url(${urlBg})`,
                         backgroundColor: colorBg,
                         backgroundSize: "cover"
                     }
                 }
        >
            <div className={c.wrapper}>

                <article>
                    <div className={c.title}>
                        <h3>{title}</h3>
                        <span className={c.separator}/>
                    </div>
                    <div className={`${c.desc} ${c.full}`}>
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>

    )


}

export default Layuot
