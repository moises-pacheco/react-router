import { Link } from 'react-router-dom';
import videojuegos from '../data/videojuegos';

function Products() {
	return (
		<>
			<h1>CATÁLOGO DE VIDEOJUEGOS</h1>


			{videojuegos.map((juego) => (
				<div key={juego.id}>
					<h2>{juego.nombre}</h2>
					<p>Precio: {juego.precio}</p>

					<Link to={`/products/${juego.id}`}>
						Ver detalles
					</Link>
				</div>
			))}
		</>
	);
}

export default Products;
