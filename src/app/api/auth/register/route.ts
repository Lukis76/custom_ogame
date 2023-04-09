import jwt from 'jsonwebtoken';
import { prismacli } from '../../conectdb';
import {hash} from 'bcrypt-ts'

export async function POST(req: Request ) {
  
  const {email, password} = req.body
  
  const password_hash = await hash(password, 8) 

  // Crea un nuevo registro de usuario en la base de datos
  const user = await prismacli.user.create({
    data: {
      email,
      password: password_hash,
    }
  });

  return new Response(user)
}



// Importa las bibliotecas necesarias


// Manejador de registro de usuarios
export default async function register(req, res) {
  // Extrae la información del usuario de la solicitud
  const { username, email, password } = req.body;

  // Crea un nuevo registro de usuario en la base de datos
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });

  // Genera un token de acceso para el nuevo usuario
  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  // Devuelve el token de acceso al cliente
  res.status(200).json({ accessToken });
}

// Manejador de inicio de sesión de usuarios
export default async function login(req, res) {
  // Extrae las credenciales del usuario de la solicitud
  const { username, password } = req.body;

  // Busca el registro de usuario correspondiente en la base de datos
  const user = await prisma.user.findUnique({ where: { username } });

  // Verifica la contraseña
  if (user && user.password === password) {
    // Genera un token de acceso para el usuario
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    // Devuelve el token de acceso al cliente
    res.status(200).json({ accessToken });
  } else {
    // Devuelve un error si el usuario no existe o la contraseña es incorrecta
    res.status(401).json({ message: 'Invalid username or password' });
  }
}

// Middleware de autenticación
export function authenticate(req, res, next) {
  // Extrae el token de acceso de la solicitud
  const authHeader = req.headers.authorization;
  const token = authHeader



