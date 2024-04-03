import * as Hapi from '@hapi/hapi';
import axios from 'axios';

import * as dotenv from 'dotenv';

dotenv.config();

const init = async () => {
    const server = Hapi.server({
        port: 3000, 
        host: 'localhost', 
        routes: {
            cors: {
                "origin": ["*"],
                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    server.route({
        method: 'POST',
        path: '/send-message',
        async handler(
            request: Hapi.Request,
            h: Hapi.ResponseToolkit
        ) {
            const {
                email, 
                message, 
                name
            } = JSON.parse(request.payload as string) as {
                email: string;
                message: string;
                name: string;
            };
            console.log(email, message, name);

            try {
                const response = await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    data: {
                        chat_id: process.env.TELEGRAM_CHAT_ID,
                        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                    }
                });
                console.log(response.data);
                return h.response('Message sent').code(200);
                } catch (error) {
                    console.error(error);
                    throw new Error('Failed to send message, with message ' + error.message);
                }
            }
        }
        )
    await server.start();
    console.log('Server running on %s', server.info.uri);
    };
    
    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    });

    init();
