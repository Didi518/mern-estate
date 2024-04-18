import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Kev</span>
            <span className="text-slate-700">Immo</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Recherche..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to={'/'}>
            <li className="hidden md:inline text-slate-700 hover:underline">
              Accueil
            </li>
          </Link>
          <Link to={'/presentation'}>
            <li className="hidden md:inline text-slate-700 hover:underline">
              Présentation
            </li>
          </Link>
          <Link to={'/connexion'}>
            <li className="text-slate-700 hover:underline">Connnexion</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
