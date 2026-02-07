import {
  consumeStream,
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "openai/gpt-4o-mini",
    system: `Du er en hjelpsom virtuell assistent for Ditt Selskap, en profesjonell rørleggerbedrift i Norge.

Svar alltid på norsk. Vær vennlig, profesjonell og hjelpsom.

Informasjon om bedriften:
- Firmanavn: Ditt Selskap
- Tjenester: Lekkasjer og tette rør, bad & kjøkken installasjon/oppussing, varmtvannsbereder service og utskifting
- Åpningstider: Mandag-Fredag 07:00-16:00, Lørdag 09:00-14:00, Søndag stengt
- Telefon: 12345678
- E-post: post@dittselskap.no
- Adresse: Adresse
- Priser: Gi alltid omtrentlige prisanslag og anbefal at kunden ber om et uforpliktende tilbud

Hold svarene korte og konsise. Ikke svar på spørsmål som ikke er relatert til VVS eller bedriften.`,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  });

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    consumeSseStream: consumeStream,
  });
}
