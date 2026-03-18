module.exports = async function (context, req) {
  context.res = {
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    const { username, password } = req.body;

    // Mock AD Authentication
    if ((username === 'ebriseno@axtel.com.mx' && password === 'admin123') || (username === 'admin' && password === 'admin')) {
      context.res.status = 200;
      context.res.body = {
        success: true,
        token: 'mock-jwt-token-ad-sso',
        user: {
          name: 'Usuario30891',
          role: 'Compras Corporativas',
          email: 'ebriseno@axtel.com.mx',
          creditLimit: 500000,
          balance: 125400
        }
      };
    } else {
      context.res.status = 401;
      context.res.body = {
        success: false,
        message: 'El nombre de usuario o la contraseña son incorrectos.'
      };
    }
  } catch (error) {
    context.res.status = 500;
    context.res.body = {
      success: false,
      message: 'Error en el servidor'
    };
  }
};
