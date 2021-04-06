import { Composer } from 'telegraf';
import { skip } from '../tgcalls';

export const skipHandler = Composer.command('skip', ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const skpped = skip(chat.id);
    ctx.reply(ss ? 'تموم شد' : "There's no song playing.");
});
