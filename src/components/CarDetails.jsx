import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data';

const CarDetails = () => {
  const { id } = useParams();
  //const navigate = useNavigate();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className="text-center">Voiture non trouvée</div>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <div className="container" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
        {/* Section Informations principales */}
        <div className="row mb-4" style={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* Image et informations essentielles */}
          <div
            className="col-md-6"
            style={{
              padding: '15px',
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', // Permet de séparer le contenu et les boutons
              height: '100%' // S'assure que le contenu remplit la hauteur du conteneur
            }} >
            <img
              src={car.image || '/path/to/default-image.jpg'}
              alt={`${car.brand} ${car.model}`}
              className="img-fluid rounded shadow mb-3"
              style={{ borderRadius: '10px', maxHeight: '100%', objectFit: 'cover' }}
            />
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{car.brand} {car.model}</h2>

            {/* Informations principales */}
            <p style={{ fontSize: '1rem', color: '#555' }}><strong>Localisation : </strong>{car.location}</p>
            <p style={{ fontSize: '1rem', color: '#555' }}><strong>Année : </strong>{car.year}</p>
            <p style={{ fontSize: '1rem', color: '#555' }}><strong>Kilométrage : </strong>{car.mileage || 'Non spécifié'} km</p>
            <p style={{ fontSize: '1rem', color: '#555' }}><strong>Énergie : </strong>{car.fuel}</p>

            {/* Stylisation du prix */}
            <p style={{
              fontSize: '1rem', // Taille plus grande
              color: '#000', // Rouge attirant
              fontWeight: 'bold', // Texte en gras
              fontFamily: '"Lobster", cursive', // Police attrayante comme Lobster
              margin: '10px 0' // Un peu de marge autour
            }}>
              Prix : {car.price}€
            </p><br></br>

            <p style={{ fontSize: '1rem', color: '#555' }}>06/10/2024 à 17:42</p>


            {/* Bloc du Vendeur avec les boutons */}
            <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>

              {/* Profil du Vendeur */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img
                  src={car.seller.profileImage}
                  alt="Profil du vendeur"
                  style={{ borderRadius: '50%', width: '80px', height: '80px', marginRight: '20px', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0' }}>{car.seller.name}</h4>
                  <p style={{ margin: '5px 0', color: '#555' }}>{car.seller.location}</p>
                  <p style={{ margin: '5px 0', color: '#555' }}>Membre depuis : {car.seller.memberSince}</p>
                  <p style={{ margin: '5px 0', color: '#555' }}>Note : ★★★★☆</p>
                </div>
              </div>

              {/* Boutons Réserver et Envoyer un Message */}
              <div style={{ marginTop: '20px' }}>
                <button
                  style={{
                    backgroundColor: '#ff9900',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    width: '100%',
                    marginBottom: '10px'
                  }}
                  onClick={() => alert('Vous avez réservé cette voiture !')}
                >
                  Réserver
                </button>

                <button
                  style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    width: '100%'
                  }}
                  onClick={() => alert('Envoyez un message au vendeur.')}
                >
                  Envoyer un message
                </button>
              </div>
            </div>
          </div>


          {/* Informations détaillées du véhicule */}
          <div className="col-md-6" style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>

            {/* Générale */}
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Générale</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Boîte de vitesses :</strong> {car.transmission || 'Non spécifié'}</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Énergie :</strong> {car.fuel || 'Non spécifié'}</li>
            </ul>

            {/* Historique */}
            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '1rem' }}>Historique :</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Mise en circulation :</strong> {car.registrationDate || 'Non spécifié'}</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Provenance :</strong> {car.origin || 'Non spécifié'}</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Première main :</strong> {car.firstOwner ? 'Oui' : 'Non'}</li>
            </ul>

            {/* Esthétique */}
            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '1rem' }}>Esthétique :</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Couleur :</strong> {car.color || 'Non spécifié'}</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Nombre de portes :</strong> {car.doors || 'Non spécifié'}</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Nombre de places :</strong> {car.seats || 'Non spécifié'}</li>
            </ul>

            {/* Puissance */}
            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '1rem' }}>Puissance :</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Puissance fiscale :</strong> {car.fiscalPower || 'Non spécifié'} CV</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Puissance DIN :</strong> {car.dinPower || 'Non spécifié'} ch</li>
            </ul>

            {/* Consommation */}
            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '1rem' }}>Consommation :</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Consommation :</strong> {car.consumption || 'Non spécifié'} L/100 km</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Émissions de CO2 :</strong> {car.co2Emissions || 'Non spécifié'} g/km</li>
              <li style={{ padding: '10px', borderBottom: '2px solid #eee' }}><strong>Crit'Air :</strong> {car.critAir || 'Non spécifié'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
