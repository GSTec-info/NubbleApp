import { ActivityIndicator, Box, Button, Text } from "@components";

interface Props {
  refetch: () => void;
  error: boolean | null | undefined;
  loading: boolean;
}

export function HomeEmpty({ error, loading, refetch }: Props) {
  let component = (
    <>
      <Text
        bold
        mb="s24">
        Sem posts no feed!
      </Text>
      <Button
        title="Tentar novamente"
        preset="outline"
        onPress={refetch}
      />
    </>
  );

  if (error) {
    component = (
      <>
        <Text
          bold
          mb="s24">
          Erro! Não foi possível carregar o feed!
        </Text>
        <Button
          title="Tentar novamente"
          preset="outline"
          onPress={refetch}
        />
      </>
    );
  }

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center">
      {loading ? <ActivityIndicator size={"large"} /> : component}
    </Box>
  );
}
