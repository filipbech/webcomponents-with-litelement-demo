export interface IPerson {
    name:string;
    email:string;
    title:string;
    color:string;
    image?:string;
}
export const people: IPerson[] = [
    {
        "name": "Person 1",
        "image": "https://thispersondoesnotexist.com/?1",
        "email": "1@test.com",
        "title": "Official title",
        "color": "84b22f"
    },{
        "name": "Person 2",
        "image": "https://thispersondoesnotexist.com/?2",
        "email": "2@test.com",
        "title": "Official title",
        "color": "674b1b"
    },{
        "name": "Person 3",
        "image": "https://thispersondoesnotexist.com/?3",
        "email": "3@test.com",
        "title": "",
        "color": "a2a5dc"
    },{
        "name": "Person 4",
        "image": "https://thispersondoesnotexist.com/?4",
        "email": "4@test.com",
        "title": "Official title",
        "color": "9e3997"
    }
];