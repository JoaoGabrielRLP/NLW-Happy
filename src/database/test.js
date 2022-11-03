const Database = require('./db').default;
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //Inserir dados na tabela para
    await saveOrphanage(db, {
        lat: "-27.2058303",
        lng: "-49.678216",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "89898989898",
        images: [
            "https://images.unsplash.com/photo-1637616087971-ed8e84701707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjY3MDgyNjA1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",

            "https://images.unsplash.com/photo-1637616087971-ed8e84701707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjY3MDgyNjA1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })

    //Consultar dados na tabela
     const selectedOrphanages = await db.all('SELECT * FROM orphanages WHERE id = "3"');
     console.log(selectedOrphanages)

    // //Deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id = '4'")
    // await db.run("DELETE FROM orphanages WHERE id = '5'")
})