/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default async function handler(req: any, res: any) {
  // CORS e cabeçalhos de resposta
  if (res.setHeader) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        // Ignora erro de parse
      }
    }

    const { email } = body || {};

    // Validação de formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'E-mail inválido. Por favor, digite um e-mail correto.' });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error('BREVO_API_KEY não encontrada nas variáveis de ambiente.');
      return res.status(500).json({ 
        error: 'Variável BREVO_API_KEY não configurada no servidor.' 
      });
    }

    // Chamada oficial à API V3 do Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'api-key': brevoApiKey
      },
      body: JSON.stringify({
        email: email.trim(),
        listIds: [4],
        updateEnabled: true
      })
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Inscrição confirmada!' });
    } else {
      console.error('Erro retornado pela API do Brevo:', data);
      const errMsg = data.message || 'Erro ao cadastrar e-mail no Brevo.';
      return res.status(response.status || 400).json({ error: errMsg });
    }
  } catch (error: any) {
    console.error('Erro na função serverless de newsletter:', error);
    return res.status(500).json({ error: 'Ocorreu um erro interno ao conectar com a API de e-mail marketing.' });
  }
}
