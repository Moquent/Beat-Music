import { BaseCommand } from "../Utils/structures/BaseCommand";
import DiscordClient from "../Client/Client";
import { CommandInteraction, MessageEmbed } from "discord.js";
import { checkMusicPermission } from "../Utils/functions";

export default class PauseCommand extends BaseCommand {
    constructor() {
        super("pause", "pause the song");
    }
    async run(client: DiscordClient, interaction: CommandInteraction) {
        if (!(await checkMusicPermission(client, interaction))) return;
        const { player } = client.players.get(interaction.guildId);
        if (player.paused) {
            const embed = new MessageEmbed()
                .setColor("#FFBD4F")
                .setDescription("Player is already paused");
            await interaction.followUp({ embeds: [embed], ephemeral: true });
        } else {
            player.pause(true);
            const embed = new MessageEmbed()
                .setColor("#FFBD4F")
                .setDescription("Player Paused");
            await interaction.followUp({ embeds: [embed] });
        }
    }
}
