import React, { useState } from 'react';

function MainApp() {
    const [file, setFile] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    const handleFileUpload = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);

        try {
            const response = await fetch('http://127.0.0.1:5000/recommend', {
                method: 'POST',
                body: formData,
            });
            console.log("sdkksvkjn");
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            console.log(data);
            setRecommendations(data.recommended_images);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="App">
            <input type="file" onChange={handleFileUpload} />
            <div>
                {recommendations.length > 0 && (
                    <div>
                        <h2>Recommended Images:</h2>
                        <ul>
                            {recommendations.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt={Recommendation ${index}} style={{ maxWidth: '200px', height: '200px' }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainApp;
