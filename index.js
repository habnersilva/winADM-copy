const fs = require('fs')

function readdir(path){
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, folders) => {
            if( err ){
                reject(err)
            }else{
                resolve(folders)
            }           

        })
    })
}

async function main(){

    const pathMain = './dir'
    const nameFileCopied = 'package.json'
    const lista = await readdir(pathMain)


    lista.forEach( el => {

        const fileDestination = `${pathMain}/${el}/${nameFileCopied}`

        try{

            fs.copyFile(`./${nameFileCopied}`, fileDestination, (err) => {
                if (err){
                    throw 'Não foi possível salvar o arquivo para ' + el;
                }else{
                    console.log(`Arquivo salvo com sucesso para pasta ${el}`)
                }
            })

        }catch(err){
             console.error('error', err)
        }
        
    })

    
}

main()