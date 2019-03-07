import React from 'react'
import Card from '@material-ui/core/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTools, faCalendarAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css'
import { withStyles } from '@material-ui/core/styles';



const StyledCard = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'auto',
        width: '500px',
        marginTop: '47px',
        padding: '8px 0px',
        background: 'rgba(255,0,0,0.2)',
        borderRadius: 20,
        border: 0,
        color: 'white',
        boxShadow: 'none',
        overflow: 'auto',
        ['@media (max-width: 1140px)']: { 
            width: '95%'
          }
    },
})(Card);
class AppFeatures extends React.Component {

    render() {
        return (
            <div className="card-container">
                <StyledCard>
                    <div className="features-container">
                        <div className="feature">
                            <FontAwesomeIcon icon={faTools} size="3x" className="tools-icon" />
                            <h2>Znajdź odpowiedniego mechanika dla swojego samochodu</h2>
                            <hr className="separator" />
                            <p>Przeglądając opinie o warsztatach samochodowych wybierz sprawdzonego i polecanego przez innych kierowców mechanika.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCalendarAlt} size="3x" className="calendar-icon" />
                            <h2>Zarezerwuj termin naprawy online</h2>
                            <hr className="separator" />
                            <p>Zarezerwuj naprawę w jednym z zarejestrowanych warsztatów samochodowych.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faUserCheck} size="3x" className="user-icon" />
                            <h2>Zdobądź nowych klientów dla swojego warsztatu</h2>
                            <hr className="separator" />
                            <p>Co miesiąc odwiedza nas 0 kierowców. Zarejestruj swój warsztat aby dotrzeć do nich</p>
                        </div>
                    </div>
                </StyledCard>
            </div>
        )
    }
}
export default AppFeatures