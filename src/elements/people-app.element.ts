import { LitElement, html } from 'lit-element';
import {customElement } from 'lit/decorators';
import { people } from '../people';

@customElement('people-app')
class PeopleAppElement extends LitElement {
    people = people;
    
    onMakeFavourite(event) {
        console.log('make favourite', event.detail)
    }

    render() {
        return html`
            <h1>List of people</h1>

            ${this.people.map(person => html`
                <person-card .person=${person} @makeFavourite=${this.onMakeFavourite}></person-card>
            `)}
        `;
    }
}