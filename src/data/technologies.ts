import python from '../content/technologies/_python.svg'
import csharp from '../content/technologies/_csharp.svg'
import cpp from '../content/technologies/_cpp.svg'
import clang from '../content/technologies/_c.svg'
import javascript from '../content/technologies/_javascript.svg'
import sql from '../content/technologies/_sql.svg'
import java from '../content/technologies/_java.svg'
import rust from '../content/technologies/_rust.png'
import vue from '../content/technologies/_vue.svg'

import tauri from '../content/technologies/_tauri.svg'
import aspnet from '../content/technologies/_dotnet.svg'
import react from '../content/technologies/_react.svg'
import git from '../content/technologies/_git.svg'
import azure from '../content/technologies/_azure.svg'
import postgresql from '../content/technologies/_postgresql.svg'
import jest from '../content/technologies/_jest.svg'
import docker from '../content/technologies/_docker.svg'
import sqlite from '../content/technologies/_sqlite.svg'
import linux from '../content/technologies/_linux.svg'

export type Technology = {
    name: string
    language: string
    link: string
}

export const languages : Technology[] = 
[
    {   name: 'Rust',
        language: rust,
        link: "https://www.rust-lang.org/"

    }, 
 
    {   name: 'C#',
        language: csharp,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    {   name: 'C',
        language: clang,
        link: "https://learn.microsoft.com/en-us/cpp/c-language/?view=msvc-170"

    },
    {   name: 'C++',
        language: cpp,
        link: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"

    },
    {   name: 'Python',
        language: python,
        link: "https://www.python.org/"

    },
    {   name: 'SQL',
        language: sql,
        link: "https://en.wikipedia.org/wiki/SQL"

    },
   {   name: 'JavaScript',
        language: javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"

    },

]
export const frameworks : Technology[] = 
[
    {   name: 'Tauri',
        language: tauri,
        link: "https://tauri.app/"

    },
    {   name: 'Vue.js',
        language: vue,
        link: "https://vuejs.org/"

    },
 
    {   name: 'ASP.NET',
        language: aspnet,
        link: "https://dotnet.microsoft.com/en-us/"

    },
    {   name: 'Jest',
         language: jest,
         link: "https://jestjs.io/"
    },
    {   name: 'React.js',
        language: react,
        link: "https://react.dev/"

    },

]
export const technologies : Technology[] = 
[
    {   name: 'Git',
        language: git,
        link: "https://git-scm.com/"

    },
    {   name: 'Linux',
        language: linux,
        link: "https://ubuntu.com/"

    },
   {   name: 'Azure',
        language: azure,
        link: "https://azure.microsoft.com/en-ca"

    },
    {   name: 'PostgreSQL',
        language: postgresql,
        link: "https://www.postgresql.org/"

    },
     {   name: 'SQLite',
        language: sqlite,
        link: "https://www.sqlite.org/index.html"

    },
    
   {   name: 'Docker',
        language: docker,
        link: "https://www.docker.com/"

    },





]
