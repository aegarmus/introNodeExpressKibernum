

export class User {
    #id
    #name
    #lastName
    #email
    #active

    constructor(name, lastName, email, id) {
        this.#id = id || crypto.randomUUID(),
        this.#name = name //TODO: Validar Nombre
        this.#lastName = lastName // TODO: Validar
        this.#email = email //TODO: validar
        this.#active = true
    }

    // Getters
    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get lastName() {
        return this.#lastName;
    }

    get email() {
        return this.#email;
    }

    get active() {
        return this.#active;
    }

    // Setters
    setName(newData) {
        this.#name = newData; //TODO: Validar Nombre
    }

    setLastName(newData) {
        this.#lastName = newData; // TODO: Validar
    }

    setEmail(newData) {
        this.#email = newData; //TODO: validar
    }

    desactive() {
        this.#active = false;
    }

    reactive() {
        this.#active = true;
    }

    toObject() {
        return {
            id: this.#id,
            name: this.#name,
            lastName: this.#lastName,
            email: this.#email,
            active: this.#active
        }
    }

    toUserObject() {
        return {
            id: this.#id,
            name: this.#name,
            lastName: this.#lastName,
            email: this.#email,
        }
    }

    static create(data) {
        try {
            const { name, lastName, email, id } = data
            const user = new User(name, lastName, email, id)
            return user
        } catch (error) {
            console.error('[ERROR] error al crear una instancia de User')
            throw new Error('Fallo al crear la instancia de User')
        }

    }
}