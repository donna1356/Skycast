import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

export default function InfoBox({info}) {
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2952&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1548&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=1587&auto=format&fit=crop";
    const PLEASANT_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2952&auto=format&fit=crop";

    // Determine image and icon
    let imageUrl = "";
    let WeatherIcon = null;

    if (info.humidity > 80) {
        imageUrl = RAIN_URL;
        WeatherIcon = <ThunderstormIcon />;
    } else if (info.temp >= 20 && info.temp <= 28 && info.humidity <= 60) {
        imageUrl = PLEASANT_URL;
        WeatherIcon = <FilterDramaIcon />;
    } else if (info.temp > 15) {
        imageUrl = HOT_URL;
        WeatherIcon = <SunnyIcon />;
    } else if (info.temp >= 10 && info.temp <= 15) {
        imageUrl = COLD_URL;
        WeatherIcon = <WbCloudyIcon />;
    } else {
        imageUrl = COLD_URL;
        WeatherIcon = <AcUnitIcon />;
    }

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} <br /> {WeatherIcon}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>    
                            <p>Humidity = {info.humidity}</p> 
                            <p>Min Temp = {info.tempMin}&deg;C</p> 
                            <p>Max Temp = {info.tempMax}&deg;C</p> 
                            <p>
                                Weather is described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                            </p> 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
