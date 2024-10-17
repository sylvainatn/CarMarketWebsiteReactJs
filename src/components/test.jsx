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