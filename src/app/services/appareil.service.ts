export class AppareilService {
    appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        }, {
            id: 2,
            name: 'Télévision',
            status: 'allumé'
        }, {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    getAppareilById(id: number) {
        const appareil = this.appareils.find((appareilObject) => {
            return appareilObject.id === id;
        });
        return appareil;
    }

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

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }

    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id = 1;
        this.appareils.push(appareilObject);
    }
}