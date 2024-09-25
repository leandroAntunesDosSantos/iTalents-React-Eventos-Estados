import './Promotion.css';

export default function Promotion({children}) {
    return (
        <section className="promotion">
            <h1 className="title-main mt20 mb20">
                {children}
            </h1>
        </section>
    );
}