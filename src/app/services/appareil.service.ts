export class AppareilService {
    appareils = [
        {
            name: 'Machine à laver',
            status: 'éteint'
        }, {
            name: 'Télévision',
            status: 'allumé'
        }, {
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    switchOnall() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }
}