import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTools, faCalendarAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css'

class AppFeatures extends React.Component {

    render() {
        return (
            <div className="features-container">
                <div className="feature">
                    <div className="font-container">
                        <FontAwesomeIcon icon={faTools} size="2x" className="tools-icon" />
                    </div>
                    <div className="header-container">
                        <h2>Znajdź odpowiedniego mechanika dla swojego samochodu</h2>
                    </div>
                    <div className="text-container">
                        <p>Przeglądając opinie o warsztatach samochodowych wybierz sprawdzonego i polecanego przez innych kierowców mechanika.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="font-container">
                        <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="calendar-icon" />
                    </div>
                    <div className="header-container">
                        <h2>Zarezerwuj termin naprawy online</h2>
                    </div>
                    <div className="text-container">
                        <p>Zarezerwuj naprawę w jednym z zarejestrowanych warsztatów samochodowych.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="font-container">
                        <FontAwesomeIcon icon={faUserCheck} size="2x" className="user-icon" />
                    </div>
                    <div className="header-container">
                        <h2>Zdobądź nowych klientów dla swojego warsztatu</h2>
                    </div>
                    <div className="text-container">
                        <p>Co miesiąc odwiedza nas 0 kierowców. Zarejestruj swój warsztat aby dotrzeć do nich</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default AppFeatures