const User =require("../../app/models/user");

describe("unit test for user class",() => {
    test("create an user object",() =>{
        //Aqui se invoca el codigo a usar en la app
        const user = new User(1,"alndiaz4","Alan Gomez","bio")

        //Despues se validad los resultados del codigo
        //lo que se hace es comparar el valor de la derecha(Valor Esperado) con el de la iquierda.
        //
        /*
        expect(user.id).toBe(1)
        expect(user.userName).toBe("alndiaz4")
        expect(user.name).toBe("Alan Gomez")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).no.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefinedtoBe()
        */
        /*USO DE GETTERS*/ 
        /*
        expect(user.getUsername).toBe("alndiaz4")
        expect(user.getBio).toBe("bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastupdate).not.toBeUndefined()
        */
       /*USO DE SETTERS*/
       user.setUsername="AlanDiaz"
       expect(user.userName).toBe("AlanDiaz")

       user.setBio="New Bio"
       expect(user.bio).toBe("New Bio") 
    })
})
