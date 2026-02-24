import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private prisma: PrismaService) { }

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('subscribe')
    async handleSubscribe(client: Socket, payload: { token: string }) {
        const overlay = await this.prisma.overlay.findUnique({
            where: { token: payload.token },
        });

        if (overlay) {
            client.join(`overlay_${overlay.user_id}`);
            console.log(`Client ${client.id} subscribed to user ${overlay.user_id}`);
            return { status: 'ok' };
        }

        return { status: 'error', message: 'Invalid token' };
    }

    sendNewDonation(user_id: string, donation: any) {
        this.server.to(`overlay_${user_id}`).emit('new-donation', donation);
    }

    sendGoalUpdate(user_id: string, goalUpdate: any) {
        this.server.to(`overlay_${user_id}`).emit('goal-update', goalUpdate);
    }
}
